package com.abc.SpringBootSecqurityEx.secqurity;


import com.abc.SpringBootSecqurityEx.entity.User;
import com.abc.SpringBootSecqurityEx.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.stream.Stream;
import java.util.stream.Collectors;

@Service
@Transactional
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User myUser = userRepository.findByUserName(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));

        return new org.springframework.security.core.userdetails.User(
                myUser.getUserName(),
                myUser.getPassword(),
                myUser.getEnabled(),
                myUser.getAccountNonExpired(),
                myUser.getCredentialsNonExpired(),
                myUser.getAccountNonLocked(),
                getAuthorities(myUser)
        );
    }

    private Collection<? extends GrantedAuthority> getAuthorities(User user) {
        return user.getRoles().stream()
                .flatMap(role -> Stream.of(
                        new SimpleGrantedAuthority("ROLE_" + role.name()),
                        legacyAuthority(role.name())
                ).filter(authority -> authority != null))
                .collect(Collectors.toList());
    }

    private SimpleGrantedAuthority legacyAuthority(String role) {
        String alias = switch (role) {
            case "SUPER_ADMIN", "FACTORY_ADMIN" -> "ROLE_ADMIN";
            case "MANAGER" -> "ROLE_MODERATOR";
            case "VIEWER" -> "ROLE_USER";
            case "SUPERVISOR", "OPERATOR", "QUALITY_INSPECTOR" -> "ROLE_EMPLOYEE";
            default -> null;
        };
        return alias == null ? null : new SimpleGrantedAuthority(alias);
    }
}

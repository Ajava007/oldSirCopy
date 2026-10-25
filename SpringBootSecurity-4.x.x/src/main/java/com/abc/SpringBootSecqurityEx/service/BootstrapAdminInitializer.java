
package com.abc.SpringBootSecqurityEx.service;

import com.abc.SpringBootSecqurityEx.entity.User;
import com.abc.SpringBootSecqurityEx.enums.ERole;
import com.abc.SpringBootSecqurityEx.repository.UserRepository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.EnumSet;

@Component
public class BootstrapAdminInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    private final String superAdminUsername;
    private final String superAdminEmail;
    private final String superAdminPassword;

    private final String factoryAdminUsername;
    private final String factoryAdminEmail;
    private final String factoryAdminPassword;

    private final String managerUsername;
    private final String managerEmail;
    private final String managerPassword;

    private final String supervisorUsername;
    private final String supervisorEmail;
    private final String supervisorPassword;

    private final String operatorUsername;
    private final String operatorEmail;
    private final String operatorPassword;

    private final String qualityInspectorUsername;
    private final String qualityInspectorEmail;
    private final String qualityInspectorPassword;

    private final String viewerUsername;
    private final String viewerEmail;
    private final String viewerPassword;

    public BootstrapAdminInitializer(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,

            @Value("${app.bootstrap-super-admin.username:}") String superAdminUsername,
            @Value("${app.bootstrap-super-admin.email:}") String superAdminEmail,
            @Value("${app.bootstrap-super-admin.password:}") String superAdminPassword,

            @Value("${app.bootstrap-factory-admin.username:}") String factoryAdminUsername,
            @Value("${app.bootstrap-factory-admin.email:}") String factoryAdminEmail,
            @Value("${app.bootstrap-factory-admin.password:}") String factoryAdminPassword,

            @Value("${app.bootstrap-manager.username:}") String managerUsername,
            @Value("${app.bootstrap-manager.email:}") String managerEmail,
            @Value("${app.bootstrap-manager.password:}") String managerPassword,

            @Value("${app.bootstrap-supervisor.username:}") String supervisorUsername,
            @Value("${app.bootstrap-supervisor.email:}") String supervisorEmail,
            @Value("${app.bootstrap-supervisor.password:}") String supervisorPassword,

            @Value("${app.bootstrap-operator.username:}") String operatorUsername,
            @Value("${app.bootstrap-operator.email:}") String operatorEmail,
            @Value("${app.bootstrap-operator.password:}") String operatorPassword,

            @Value("${app.bootstrap-quality-inspector.username:}") String qualityInspectorUsername,
            @Value("${app.bootstrap-quality-inspector.email:}") String qualityInspectorEmail,
            @Value("${app.bootstrap-quality-inspector.password:}") String qualityInspectorPassword,

            @Value("${app.bootstrap-viewer.username:}") String viewerUsername,
            @Value("${app.bootstrap-viewer.email:}") String viewerEmail,
            @Value("${app.bootstrap-viewer.password:}") String viewerPassword
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;

        this.superAdminUsername = superAdminUsername;
        this.superAdminEmail = superAdminEmail;
        this.superAdminPassword = superAdminPassword;

        this.factoryAdminUsername = factoryAdminUsername;
        this.factoryAdminEmail = factoryAdminEmail;
        this.factoryAdminPassword = factoryAdminPassword;

        this.managerUsername = managerUsername;
        this.managerEmail = managerEmail;
        this.managerPassword = managerPassword;

        this.supervisorUsername = supervisorUsername;
        this.supervisorEmail = supervisorEmail;
        this.supervisorPassword = supervisorPassword;

        this.operatorUsername = operatorUsername;
        this.operatorEmail = operatorEmail;
        this.operatorPassword = operatorPassword;

        this.qualityInspectorUsername = qualityInspectorUsername;
        this.qualityInspectorEmail = qualityInspectorEmail;
        this.qualityInspectorPassword = qualityInspectorPassword;

        this.viewerUsername = viewerUsername;
        this.viewerEmail = viewerEmail;
        this.viewerPassword = viewerPassword;
    }

    @Override
    @Transactional
    public void run(String... args) {

        createUser(
                superAdminUsername,
                superAdminEmail,
                superAdminPassword,
                "Super Admin",
                ERole.SUPER_ADMIN
        );

        createUser(
                factoryAdminUsername,
                factoryAdminEmail,
                factoryAdminPassword,
                "Factory Admin",
                ERole.FACTORY_ADMIN
        );

        createUser(
                managerUsername,
                managerEmail,
                managerPassword,
                "Manager",
                ERole.MANAGER
        );

        createUser(
                supervisorUsername,
                supervisorEmail,
                supervisorPassword,
                "Supervisor",
                ERole.SUPERVISOR
        );

        createUser(
                operatorUsername,
                operatorEmail,
                operatorPassword,
                "Operator",
                ERole.OPERATOR
        );

        createUser(
                qualityInspectorUsername,
                qualityInspectorEmail,
                qualityInspectorPassword,
                "Quality Inspector",
                ERole.QUALITY_INSPECTOR
        );

        createUser(
                viewerUsername,
                viewerEmail,
                viewerPassword,
                "Viewer",
                ERole.VIEWER
        );
    }

    private void createUser(
            String username,
            String email,
            String password,
            String firstName,
            ERole role
    ) {

        // 1. Skip if all configuration values are empty.
        if (isBlank(username)
                && isBlank(email)
                && isBlank(password)) {

            System.out.println(
                    "Bootstrap configuration skipped for role: " + role
            );
            return;
        }

        // 2. Validate configuration.
        if (isBlank(username)) {
            throw new IllegalStateException(
                    "Bootstrap username is missing for role: " + role
            );
        }

        if (isBlank(email)) {
            throw new IllegalStateException(
                    "Bootstrap email is missing for role: " + role
            );
        }

        if (isBlank(password)) {
            throw new IllegalStateException(
                    "Bootstrap password is missing for role: " + role
            );
        }

        if (password.length() < 8) {
            throw new IllegalStateException(
                    "Bootstrap password must contain at least 8 characters"
                            + " for role: " + role
            );
        }

        // 3. Avoid creating a duplicate username.
        if (userRepository.existsByUserName(username)) {
            System.out.println(
                    "Bootstrap username already exists for role: " + role
            );
            return;
        }

        // 4. Avoid creating a duplicate email.
        if (userRepository.existsByEmail(email)) {
            System.out.println(
                    "Bootstrap email already exists for role: " + role
            );
            return;
        }

        // 5. Create and save the user.
        User user = new User();

        user.setUserName(username);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setUserFirstName(firstName);
        user.setRoles(EnumSet.of(role));

        userRepository.save(user);

        System.out.println(
                "Bootstrap user created successfully. Role: " + role
        );
    }

    private boolean isBlank(String value) {
        return value == null || value.isBlank();
    }
}

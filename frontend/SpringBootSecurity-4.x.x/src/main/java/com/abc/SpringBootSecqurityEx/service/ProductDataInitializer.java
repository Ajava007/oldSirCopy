package com.abc.SpringBootSecqurityEx.service;

import com.abc.SpringBootSecqurityEx.entity.ProductEntity;
import com.abc.SpringBootSecqurityEx.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Component
@Order(1)
public class ProductDataInitializer implements CommandLineRunner {
    private final ProductRepository productRepository;

    public ProductDataInitializer(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public void run(String... args) {
        if (productRepository.count() > 0) {
            return;
        }

        String[] names = {"Brake Pad", "Oil Filter", "Air Filter", "Wheel", "Door Panel", "Seat Belt", "Head Light", "Battery", "Mirror", "Radiator", "Fuel Pump", "Spark Plug", "Wiper Blade", "Steering Rack", "Floor Mat", "Window Glass", "Door Handle", "Fan Belt", "Coolant Hose", "Safety Sensor"};
        List<ProductEntity> products = new ArrayList<>();
        for (int i = 1; i <= names.length; i++) {
            products.add(product(names[i - 1], "Vehicle Parts", String.valueOf(18.0 + i * 7.5),
                    25 + i, "Replacement " + names[i - 1] + " for a Northstar vehicle.", null, i == 20));
        }
        productRepository.saveAll(products);
    }

    private ProductEntity product(String name, String category, String price, int stock,
                                  String description, String imageUrl, boolean premium) {
        ProductEntity product = new ProductEntity();
        product.setName(name);
        product.setCategory(category);
        product.setPrice(new BigDecimal(price));
        product.setStock(stock);
        product.setDescription(description);
        product.setImageUrl(imageUrl);
        product.setActive(true);
        product.setPremium(premium);
        return product;
    }
}

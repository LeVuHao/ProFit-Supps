package com.doan.ProFit.service;

import com.doan.ProFit.model.Category;
import com.doan.ProFit.model.Product;

import java.util.List;
import java.util.Optional;

public interface CatalogService {
    List<Product> getAllProducts();

    Optional<Product> getProductById(String id);

    List<Product> getProductsByCategory(String categorySlug);

    List<Category> getAllCategories();

    Optional<Category> getCategoryBySlug(String slug);
}

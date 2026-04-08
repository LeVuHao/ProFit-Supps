package com.doan.ProFit.controller.api;

import com.doan.ProFit.model.Category;
import com.doan.ProFit.service.CatalogService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    private final CatalogService catalogService;

    public CategoryController(CatalogService catalogService) {
        this.catalogService = catalogService;
    }

    @GetMapping
    public List<Category> getAllCategories() {
        return catalogService.getAllCategories();
    }

    @GetMapping("/{slug}")
    public ResponseEntity<Category> getCategoryBySlug(@PathVariable String slug) {
        return catalogService.getCategoryBySlug(slug)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/{slug}/products")
    public List<com.doan.ProFit.model.Product> getProductsByCategory(@PathVariable String slug) {
        return catalogService.getProductsByCategory(slug);
    }
}

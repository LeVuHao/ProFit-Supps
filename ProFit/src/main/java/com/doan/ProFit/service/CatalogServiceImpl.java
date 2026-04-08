package com.doan.ProFit.service;

import com.doan.ProFit.model.Category;
import com.doan.ProFit.model.Product;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CatalogServiceImpl implements CatalogService {
    private final List<Product> products = new ArrayList<>();
    private final List<Category> categories = new ArrayList<>();

    public CatalogServiceImpl() {
        initializeCategories();
        initializeProducts();
    }

    @Override
    public List<Product> getAllProducts() {
        return List.copyOf(products);
    }

    @Override
    public Optional<Product> getProductById(String id) {
        return products.stream().filter(product -> product.getId().equals(id)).findFirst();
    }

    @Override
    public List<Product> getProductsByCategory(String categorySlug) {
        return products.stream()
                .filter(p -> p.getCategorySlug().equals(categorySlug))
                .collect(Collectors.toList());
    }

    @Override
    public List<Category> getAllCategories() {
        return List.copyOf(categories);
    }

    @Override
    public Optional<Category> getCategoryBySlug(String slug) {
        return categories.stream().filter(category -> category.getSlug().equals(slug)).findFirst();
    }

    private void initializeCategories() {
        categories.add(new Category(
                "whey-concentrate",
                "Whey Concentrate",
                "Balanced protein blend for daily use, taste, and recovery support.",
                "Great value formula for steady muscle nutrition.",
                "from-amber-100 to-orange-50"
        ));
        categories.add(new Category(
                "whey-isolate",
                "Whey Isolate",
                "High-purity protein with lower carbs, fats, and lactose.",
                "Lean protein choice for cutting phases and clean macros.",
                "from-sky-100 to-cyan-50"
        ));
        categories.add(new Category(
                "hydrolyzed-whey",
                "Hydrolyzed Whey",
                "Pre-digested whey peptides for faster absorption after training.",
                "Advanced recovery support for high-frequency athletes.",
                "from-teal-100 to-emerald-50"
        ));
        categories.add(new Category(
                "mass-gainer",
                "Mass Gainer",
                "High-calorie protein-carb blends to increase total intake.",
                "Built for hard gainers and bulking cycles.",
                "from-rose-100 to-orange-50"
        ));
        categories.add(new Category(
                "plant-protein",
                "Plant Protein",
                "Dairy-free blends from pea, rice, and pumpkin proteins.",
                "Smooth vegan protein options for sensitive digestion.",
                "from-lime-100 to-emerald-50"
        ));
        categories.add(new Category(
                "recovery-performance",
                "Recovery & Performance",
                "Post-workout stacks, amino support, and hydration performance aids.",
                "Complete your stack beyond protein powder.",
                "from-violet-100 to-fuchsia-50"
        ));
    }

    private void initializeProducts() {
        products.add(new Product(
                "gold-whey-concentrate",
                "Gold Standard Whey Concentrate",
                "Whey Concentrate",
                "whey-concentrate",
                45,
                55,
                18,
                4.8,
                "/images/Gold_Standard_Whey_Concentrate.jpg",
                "Classic 80% concentration with great taste and mixability.",
                "Industry standard with proven amino acid profile, 24g protein per scoop, and clean ingredients for daily post-workout recovery.",
                true,
                false,
                true,
                false,
                false
        ));
        products.add(new Product(
                "elite-whey-isolate",
                "Elite Pro Whey Isolate",
                "Whey Isolate",
                "whey-isolate",
                65,
                85,
                24,
                4.9,
                "/images/Elite_Pro_Whey_Isolate.jpg",
                "Microfiltered isolate with 25g protein and minimal carbs.",
                "Premium 90%+ isolate with reduced lactose, designed for lean physiques and cutting phases while maintaining muscle mass.",
                true,
                true,
                true,
                false,
                false
        ));
        products.add(new Product(
                "hydro-rapid-recovery",
                "Hydro-Rapid Recovery Complex",
                "Hydrolyzed Whey",
                "hydrolyzed-whey",
                72,
                88,
                18,
                4.7,
                "/images/hydro_rapid_recovery.jpg",
                "Pre-hydrolyzed peptides for 40-minute peak absorption.",
                "Broken-chain whey hydrolysate maximizes amino spike post-training, ideal for intra-workout or immediate post-exercise recovery.",
                true,
                true,
                false,
                true,
                false
        ));
        products.add(new Product(
                "mass-fuel-bulk-gainer",
                "Mass Fuel Bulking Gainer",
                "Mass Gainer",
                "mass-gainer",
                38,
                null,
                null,
                4.6,
                "MG1",
                "1000 cal/scoop blend for serious bulk phases.",
                "Calorie-dense formula: 50g carbs, 25g protein, 8g fat per serving, designed for hard gainers and off-season training.",
                false,
                true,
                true,
                false,
                false
        ));
        products.add(new Product(
                "vanilla-whey-pro",
                "Vanilla Dream Whey Pro",
                "Whey Concentrate",
                "whey-concentrate",
                42,
                52,
                19,
                4.5,
                "WC2",
                "Smooth vanilla flavor with BCAA matrix boost.",
                "Enhanced concentrate formula with added 2:1:1 BCAA ratio for improved recovery signaling and muscle preservation.",
                false,
                false,
                true,
                false,
                true
        ));
        products.add(new Product(
                "chocolate-isolate-pure",
                "Pure Chocolate Isolate",
                "Whey Isolate",
                "whey-isolate",
                68,
                null,
                null,
                4.8,
                "WI2",
                "Rich chocolate isolate with zero sugar and low sodium.",
                "Clean label isolate with minimal additives, 26g protein, and electrolyte blend for superior hydration during workouts.",
                false,
                true,
                true,
                false,
                false
        ));
        products.add(new Product(
                "vegan-pea-rice-blend",
                "Vegan Pea & Rice Blend",
                "Plant Protein",
                "plant-protein",
                48,
                58,
                17,
                4.4,
                "/images/vegan_pea_rice_blend.jpg",
                "Complete amino profile from organic plant sources.",
                "Dairy-free, naturally sweetened with stevia, pea + rice protein combo delivers all 9 essential amino acids.",
                true,
                false,
                true,
                false,
                false
        ));
        products.add(new Product(
                "amino-recovery-stack",
                "Advanced Amino Recovery Stack",
                "Recovery & Performance",
                "recovery-performance",
                35,
                null,
                null,
                4.7,
                "RS1",
                "Standalone 6g BCAA + EAA complex for intra-workout use.",
                "Comprehensive 2:1:1 BCAA + full EAA spectrum, zero carbs, designed to prevent catabolism during fasted training.",
                false,
                true,
                true,
                true,
                false
        ));
        products.add(new Product(
                "creatine-monohydrate-elite",
                "Creatine Monohydrate Elite",
                "Recovery & Performance",
                "recovery-performance",
                18,
                null,
                null,
                4.9,
                "RS2",
                "Micronized 5g-per-scoop pure creatine monohydrate.",
                "Pharmaceutical-grade creatine for ATP energy recreation, muscle strength gains, and cognitive support with zero fillers.",
                false,
                false,
                true,
                false,
                true
        ));
        products.add(new Product(
                "hydro-whey-peptide-pro",
                "Hydro Whey Peptide Pro",
                "Hydrolyzed Whey",
                "hydrolyzed-whey",
                75,
                92,
                18,
                4.6,
                "WH2",
                "Ultra-fast absorption hydrolyzed peptides, vanilla.",
                "Triple-hydrolyzed whey with added MCT oil for rapid energy, perfect for athletes needing maximum nutrient uptake speed.",
                false,
                false,
                true,
                true,
                false
        ));
        products.add(new Product(
                "lean-muscle-isolate-20",
                "Lean Muscle Isolate 20-Pack",
                "Whey Isolate",
                "whey-isolate",
                62,
                78,
                21,
                4.8,
                "WI3",
                "Single-serve isolate packets for grab-and-go convenience.",
                "20 pre-portioned individual packets, 25g protein each, no mixing needed for on-the-go gym athletes.",
                false,
                true,
                false,
                true,
                false
        ));
        products.add(new Product(
                "mass-fuel-chocolate",
                "Mass Fuel Chocolate Gainer",
                "Mass Gainer",
                "mass-gainer",
                40,
                48,
                17,
                4.5,
                "MG2",
                "Thick chocolate gainer with oat base for volume.",
                "Oat-based mass gainer with 45g carbs and 23g protein, perfect for post-workout calorie surplus and smooth texture.",
                false,
                false,
                true,
                false,
                true
        ));
    }
}

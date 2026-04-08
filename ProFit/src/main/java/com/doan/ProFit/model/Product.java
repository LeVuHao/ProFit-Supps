package com.doan.ProFit.model;

public class Product {
    private String id;
    private String name;
    private String category;
    private String categorySlug;
    private Integer price;
    private Integer oldPrice;
    private Integer discount;
    private Double rating;
    private String image;
    private String shortDescription;
    private String description;
    private Boolean isFlashSale;
    private Boolean isBestSelling;
    private Boolean isExplore;
    private Boolean isFeatured;
    private Boolean isNewArrival;

    public Product() {
    }

    public Product(String id, String name, String category, String categorySlug, Integer price, Integer oldPrice, Integer discount,
                   Double rating, String image, String shortDescription, String description,
                   Boolean isFlashSale, Boolean isBestSelling, Boolean isExplore, Boolean isFeatured, Boolean isNewArrival) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.categorySlug = categorySlug;
        this.price = price;
        this.oldPrice = oldPrice;
        this.discount = discount;
        this.rating = rating;
        this.image = image;
        this.shortDescription = shortDescription;
        this.description = description;
        this.isFlashSale = isFlashSale;
        this.isBestSelling = isBestSelling;
        this.isExplore = isExplore;
        this.isFeatured = isFeatured;
        this.isNewArrival = isNewArrival;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCategorySlug() {
        return categorySlug;
    }

    public void setCategorySlug(String categorySlug) {
        this.categorySlug = categorySlug;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getOldPrice() {
        return oldPrice;
    }

    public void setOldPrice(Integer oldPrice) {
        this.oldPrice = oldPrice;
    }

    public Integer getDiscount() {
        return discount;
    }

    public void setDiscount(Integer discount) {
        this.discount = discount;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getIsFlashSale() {
        return isFlashSale;
    }

    public void setIsFlashSale(Boolean isFlashSale) {
        this.isFlashSale = isFlashSale;
    }

    public Boolean getIsBestSelling() {
        return isBestSelling;
    }

    public void setIsBestSelling(Boolean isBestSelling) {
        this.isBestSelling = isBestSelling;
    }

    public Boolean getIsExplore() {
        return isExplore;
    }

    public void setIsExplore(Boolean isExplore) {
        this.isExplore = isExplore;
    }

    public Boolean getIsFeatured() {
        return isFeatured;
    }

    public void setIsFeatured(Boolean isFeatured) {
        this.isFeatured = isFeatured;
    }

    public Boolean getIsNewArrival() {
        return isNewArrival;
    }

    public void setIsNewArrival(Boolean isNewArrival) {
        this.isNewArrival = isNewArrival;
    }
}

package com.doan.ProFit.model;

public class Category {
    private String slug;
    private String name;
    private String description;
    private String hero;
    private String accent;

    public Category() {
    }

    public Category(String slug, String name, String description, String hero, String accent) {
        this.slug = slug;
        this.name = name;
        this.description = description;
        this.hero = hero;
        this.accent = accent;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getHero() {
        return hero;
    }

    public void setHero(String hero) {
        this.hero = hero;
    }

    public String getAccent() {
        return accent;
    }

    public void setAccent(String accent) {
        this.accent = accent;
    }
}

package io.github.jhipster.application.service.dto;

import java.io.Serializable;
import java.util.Objects;

public class ImageDTO implements Serializable {

    private Long id;

    private String cryptoUser;

    private String imageLocation;

    private Integer upvoteCount;

    private String imageBase64;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCryptoUser() {
        return cryptoUser;
    }

    public void setCryptoUser(String cryptoUser) {
        this.cryptoUser = cryptoUser;
    }

    public String getImageLocation() {
        return imageLocation;
    }

    public void setImageLocation(String imageLocation) {
        this.imageLocation = imageLocation;
    }

    public Integer getUpvoteCount() {
        return upvoteCount;
    }

    public void setUpvoteCount(Integer upvoteCount) {
        this.upvoteCount = upvoteCount;
    }

    public String getImageBase64() {
        return imageBase64;
    }

    public void setImageBase64(String imageBase64) {
        this.imageBase64 = imageBase64;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        ImageDTO imageDTO = (ImageDTO) o;
        if(imageDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), imageDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ImageDTO{" +
            "id=" + getId() +
            ", cryptoUser='" + getCryptoUser() + "'" +
            ", imageLocation='" + getImageLocation() + "'" +
            ", upvoteCount='" + getUpvoteCount() + "'" +
            ", imageBase64='" + getImageBase64() + "'" +
            "}";
    }
}

package io.github.jhipster.application.service.mapper;

import io.github.jhipster.application.domain.Image;
import io.github.jhipster.application.service.dto.ImageDTO;
import org.mapstruct.Mapper;

/**
 * Mapper for the entity Image and its DTO ImageDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ImageMapper extends EntityMapper<ImageDTO, Image> {

    default Image fromId(Long id) {
        if (id == null) {
            return null;
        }
        Image image = new Image();
        image.setId(id);
        return image;
    }
}

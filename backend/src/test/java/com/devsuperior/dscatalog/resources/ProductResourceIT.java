package com.devsuperior.dscatalog.resources;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dscatalog.dto.ProductDTO;
import com.devsuperior.dscatalog.tests.Factory;
import com.devsuperior.dscatalog.tests.TokenUtil;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class ProductResourceIT {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private ObjectMapper objectMapper;

	@Autowired
	private TokenUtil tokenUtil;

	private Long existingId;
	private Long noExistingId;
	private Long countTotalProducts;

	private String username;
	private String password;

	@BeforeEach
	void setUp() throws Exception {

		username = "admin@email.com";
		password = "123456";

		existingId = 1L;
		noExistingId = 1000L;
		countTotalProducts = 25L;
	}

	@Test
	public void findAllShouldReturnSortedPageWhenSortByName() throws Exception {

		mockMvc.perform(get("/products?page=0&size=12&sort=name,asc"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.totalElements").value(countTotalProducts))
				.andExpect(jsonPath("$.content").exists())
				.andExpect(jsonPath("$.content[0].name").value("Macbook Pro"))
				.andExpect(jsonPath("$.content[1].name").value("PC Gamer"))
				.andExpect(jsonPath("$.content[2].name").value("PC Gamer Alfa"));

	}

	@Test
	public void updateShouldReturnProductDTOWhenIdExists() throws Exception {

		String accessToken = tokenUtil.obtainAccessToken(mockMvc, username, password);

		ProductDTO productDTO = Factory.createdProductDTO();
		String jsonBody = objectMapper.writeValueAsString(productDTO);

		String expectedName = productDTO.getName();
		String expectedDescription = productDTO.getDescription();

		mockMvc.perform(put("/products/{id}", existingId)
				.header("Authorization", "Bearer " + accessToken)
				.content(jsonBody)
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.id").value(existingId))
				.andExpect(jsonPath("$.name").value(expectedName))
				.andExpect(jsonPath("$.description").value(expectedDescription));

	}

	@Test
	public void updateShouldReturnNotFoundWhenIdDoesNotExists() throws Exception {

		String accessToken = tokenUtil.obtainAccessToken(mockMvc, username, password);

		ProductDTO productDTO = Factory.createdProductDTO();
		String jsonBody = objectMapper.writeValueAsString(productDTO);

		mockMvc.perform(put("/products/{id}", noExistingId)
				.header("Authorization", "Bearer " + accessToken)
				.content(jsonBody)
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());

	}

}

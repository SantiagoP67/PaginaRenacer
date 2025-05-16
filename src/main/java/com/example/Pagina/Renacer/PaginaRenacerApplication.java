package com.example.Pagina.Renacer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class PaginaRenacerApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(PaginaRenacerApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(PaginaRenacerApplication.class);
	}
}

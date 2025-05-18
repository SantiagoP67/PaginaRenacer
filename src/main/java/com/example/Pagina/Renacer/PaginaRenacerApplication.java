package com.example.Pagina.Renacer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
/**
 * Clase principal que arranca la aplicación Spring Boot.
 *
 * La anotación @SpringBootApplication incluye:
 * - @Configuration: marca la clase como fuente de definiciones de beans.
 * - @EnableAutoConfiguration: habilita la configuración automática de Spring Boot.
 * - @ComponentScan: habilita el escaneo de componentes en el paquete y subpaquetes.
 */
@SpringBootApplication
public class PaginaRenacerApplication extends SpringBootServletInitializer {
	/**
	 * Método principal (entry point) que lanza la aplicación Spring Boot
	 * al ejecutarla desde una herramienta como la terminal o un IDE.
	 */
	public static void main(String[] args) {
		SpringApplication.run(PaginaRenacerApplication.class, args);
	}

	/**
	 * Este método se sobrescribe cuando se desea desplegar la aplicación como un WAR
	 * en un contenedor de servlets externo (por ejemplo, Tomcat).
	 *
	 * @param builder - objeto que permite personalizar la configuración de la aplicación.
	 * @return una instancia del constructor configurada con la clase principal.
	 */
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(PaginaRenacerApplication.class);
	}
}

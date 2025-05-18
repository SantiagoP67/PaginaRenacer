# DockerFile necesario para el deploy
#Comandos para ejecutar en dcoker
#docker build -t pagina-renacer-springboot .
#docker run -d -p 8080:8080 pagina-renacer-springboot

FROM eclipse-temurin:17-jdk AS builder

WORKDIR /app

COPY . .

RUN chmod +x mvnw

RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:17-jre

COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
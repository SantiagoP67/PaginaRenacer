FROM eclipse-temurin:17-jdk AS builder

WORKDIR/app

COPY . .

RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:17-jre

COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
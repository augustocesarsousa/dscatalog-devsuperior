FROM maven:3.8.4 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:11-jdk AS jdk
COPY --from=build /target/*.jar /app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]

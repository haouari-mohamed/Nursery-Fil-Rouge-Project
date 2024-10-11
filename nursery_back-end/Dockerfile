FROM openjdk:21
VOLUME /tmp
EXPOSE 8888
COPY target/nurseryFilrouge-0.0.1-SNAPSHOT.jar nursery.jar
ENTRYPOINT ["java","-jar","/nursery.jar"]
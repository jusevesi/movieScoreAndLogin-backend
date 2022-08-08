-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: movies
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `idmovies` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `genre` varchar(45) DEFAULT NULL,
  `score` int NOT NULL,
  `prizes` varchar(200) DEFAULT NULL,
  `year` int DEFAULT NULL,
  `owner` varchar(20) NOT NULL,
  PRIMARY KEY (`idmovies`),
  UNIQUE KEY `idmovies_UNIQUE` (`idmovies`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (2,'The Black Swam','Dramma',5,'2',2010,'public'),(3,'The Hangover','Comedy',5,'3 Oscar Prize',2009,'1'),(4,'Star Wars: A new Hope','Scifi',10,'4 Oscar Prizes',1977,'3'),(5,'Star Wars: The Empire Strikes Back','Scifi',10,'5 Prizes',1980,'3'),(6,'Star Wars: The Return of the Jedi','Scifi',7,'5 Oscar Prizes',1983,'3'),(7,'The Lord of the Ring: The Fellowship of the Ring','Scifi',8,'7 Oscar Prizes',2001,'public'),(8,'The Lord of the Ring: The Two Towers','Scifi',9,'5 Oscar Prizes',2002,'public'),(9,'The Lord of the Ring: The Return of the King','Scifi',9,'8 Oscar Prizes',2003,'public');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `iduser` int NOT NULL AUTO_INCREMENT,
  `email` varchar(150) NOT NULL,
  `user` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ferchito37@gm.com','ferchitoo','$2a$10$71gToBIzVkHXnKnQUyZ7eOYSwr8VurHr24xcRwUMYJ0LSvfR0zk4u'),(2,'hector@gm.com','hs22233','$2a$10$C.6UnB3bLbwI8vij4u/MkeMDZ3WHYQEsrFv4RaPqbP24EORMn1Mem'),(3,'juansebstian@gmail.com','juanVera','$2a$10$zi6uNjIuyo8McFSYD.pe/eklQ4EAxoSugV7EfMfSr8gm82uKkF6ue'),(4,'jvera17@gm.com','juanchorois','$2a$10$rb1Mxx2J4kCTl3QX7emBDOYcluvu3wXCFdBQw/2lCLwf0fSraB9Aq'),(5,'starwars37@gm.com','ferchitoo','$2a$10$QdRb7asvpF5zmi5HNN3qM.n.AuCRPhD1H1fhbJ/WH7WhPJ/ngtDAO'),(6,'over-39@gmail.com','Oscarv14','$2a$10$TQzqRkHLDQ.yg0Gevd.paOqDFZzlh2zHwvaBXIM.jY86vGsCqbbHa');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-08 15:06:43

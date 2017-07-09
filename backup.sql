-- MySQL dump 10.13  Distrib 5.7.17, for osx10.12 (x86_64)
--
-- Host: localhost    Database: beatormatch_db
-- ------------------------------------------------------
-- Server version	5.7.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) DEFAULT NULL,
  `upc` varchar(55) NOT NULL,
  `product_name` varchar(55) NOT NULL,
  `product_desc` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `quantity` int(10) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `asin` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Cameras','013803204131','Canon 6d body','canon 6d body only full frame DSLR','http://www.adorama.com/images/large/ICA6D.JPG',2,99.00,'2017-05-20 16:35:38','B009B0MZ8U'),(2,'Cameras','018208015030','Nikon D5200 body','Nikon D5200 body only DSLR 24 MP','https://cdn.districtcamera.com/mmdccamera/images/nikon-d5200-body-blk-l.jpg',4,459.00,'2017-05-20 16:35:38','B00RBW707G'),(3,'Cameras','027242878822','sony a 6000','sony mirrorless DSLR with the lens','http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/44sAAOSwN6JY-iDQ/$_57.JPG?set_id=8800005007',2,648.00,'2017-05-20 16:35:38','B00I8BICB2'),(4,'Cameras','027242876965','Sony DSC-W830 ','Sony DSC-W830 silver ','http://images.prosperentcdn.com/images/250x250/content.abt.com/media/images/products/l_DSCW830.jpg',10,100.00,'2017-05-20 16:35:38','B00HNJWUBI'),(26,'Projectors','600603200038','Insignia DLP projector','Insignia Portable Pico Projector Cube Black NS-PR116 New','https://images-na.ssl-images-amazon.com/images/I/61e6-KQ0T6L._SL1000_.jpg',4,59.96,'2017-06-03 15:34:28','B01N19XAJC'),(27,'Smart Watch','887276041933','Samsung Gear Fit','Samsung Gear Fit Smart Watch, Black (US Version)','https://images-na.ssl-images-amazon.com/images/I/71KkKU4nDaL._SL1500_.jpg',4,49.95,'2017-06-03 16:22:32','B00JBJ3JBI');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-18 14:15:45

-- phpMyAdmin SQL Dump
-- version 5.1.4
-- https://www.phpmyadmin.net/
--
-- Host: mysql-starss.alwaysdata.net
-- Generation Time: Sep 20, 2022 at 06:22 PM
-- Server version: 10.6.7-MariaDB
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `starss_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `actividad`
--

CREATE TABLE `actividad` (
  `descripcion_actividad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_actividad` int(11) NOT NULL,
  `id_proyecto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `actividad`
--

INSERT INTO `actividad` (`descripcion_actividad`, `id_actividad`, `id_proyecto`) VALUES
('Diseño de proyecto Oasis', 1, 1),
('Implementación de recursos', 2, 5),
('Desarrollo de proyecto Altair', 3, 2),
('Junta de proyecto Oasis', 4, 1),
('Desarrollo de proyecto Oasis', 5, 1),
('Desarrollo de caso de uso para Oasis', 6, 1),
('Desarrollo de función web para Pry', 7, 3),
('Desarrollo de proyecto Altair', 8, 2),
('Desarrollo de proyecto Altair', 9, 2),
('Desarrollo de proyecto Pyro', 10, 4),
('Junta de consejo de departamento', 11, 5),
('Desarrollo de proyecto Altair', 12, 2),
('Desarrollo de proyecto Oasis', 13, 1),
('Junta de reasignaciones en proyecto Pyro', 14, 4),
('Reunión de consejo de departamento', 15, 5),
('Desarrollo de función web para Pry', 16, 3),
('Desarrollo de función web para Pry', 17, 3),
('Diseño de proyecto para Pyro', 18, 4),
('Junta con colaboradores', 19, 5),
('Entrega de documentaciones del departamento', 20, 5);

-- --------------------------------------------------------

--
-- Table structure for table `empleado`
--

CREATE TABLE `empleado` (
  `id_empleado` int(11) NOT NULL,
  `nombre` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_tiempo_completo` tinyint(1) NOT NULL,
  `correo` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sub_auth0` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `empleado`
--

INSERT INTO `empleado` (`id_empleado`, `nombre`, `is_tiempo_completo`, `correo`, `sub_auth0`, `id_rol`) VALUES
(12, 'Alan', 1, 'aalan@natgas.com.mx', 'auth0|n#\"51_2*3f-kcansad', 3),
(4, 'Andrés', 0, 'aandres@natgas.com.mx', 'auth0|n#\"44_2*3f-kcansad', 1),
(19, 'Alejandro', 1, 'Ale_jandro@natgas.com.mx', 'auth0|n#\"58_2*3f-kcansad', 1),
(15, 'Diego', 1, 'ddiegoo@natgas.com.mx', 'auth0|n#\"54_2*3f-kcansad', 3),
(2, 'Emilio', 0, 'eemilio@natgas.com.mx', 'auth0|n#\"42_2*3f-kcansad', 2),
(17, 'Enrique', 1, 'Enriquex@natgas.com.mx', 'auth0|n#\"56_2*3f-kcansad', 2),
(18, 'Elvira', 1, 'Evlira@natgas.com.mx', 'auth0|n#\"57_2*3f-kcansad', 3),
(14, 'Felix', 1, 'felixg@natgas.com.mx', 'auth0|n#\"53_2*3f-kcansad', 2),
(10, 'Guadalupe', 0, 'gguadalupe@natgas.com.mx', 'auth0|n#\"50_2*3f-kcansad', 1),
(6, 'Monse', 0, 'jjose@natgas.com.mx', 'auth0|n#\"46_2*3f-kcansad', 3),
(5, 'Juan', 0, 'jjuan@natgas.com.mx', 'auth0|n#\"45_2*3f-kcansad', 2),
(7, 'Justino', 0, 'jjustino@natgas.com.mx', 'auth0|n#\"47_2*3f-kcansad', 1),
(11, 'Leonardo', 1, 'leo0ramolo@natgas.com.mx', 'auth0|n#\"50_2*3f-kcansad', 2),
(9, 'Monse', 0, 'mmonse@natgas.com.mx', 'auth0|n#\"49_2*3f-kcansad', 3),
(13, 'Monse', 1, 'mmonsee1@natgas.com.mx', 'auth0|n#\"52_2*3f-kcansad', 1),
(20, 'Monica', 1, 'MonicaAPW@natgas.com.mx', 'auth0|n#\"59_2*3f-kcansad', 2),
(1, 'Pedro', 0, 'ppedro@natgas.com.mx', 'auth0|n#\"41_2*3f-kcansad', 1),
(8, 'Ramona', 0, 'rramona@natgas.com.mx', 'auth0|n#\"48_2*3f-kcansad', 2),
(3, 'Regina', 0, 'rregina@natgas.com.mx', 'auth0|n#\"43_2*3f-kcansad', 3),
(16, 'Santiago', 1, 'santilb@natgas.com.mx', 'auth0|n#\"55_2*3f-kcansad', 1);

-- --------------------------------------------------------

--
-- Table structure for table `proyecto`
--

CREATE TABLE `proyecto` (
  `id_proyecto` int(11) NOT NULL,
  `nombre_proyecto` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion_proyecto` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `is_activo` tinyint(1) NOT NULL,
  `tarea_proyecto` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `proyecto`
--

INSERT INTO `proyecto` (`id_proyecto`, `nombre_proyecto`, `descripcion_proyecto`, `fecha_inicio`, `is_activo`, `tarea_proyecto`) VALUES
(1, 'Oasis', 'Web app en react para fundación Oasis', '2022-01-06 23:00:00', 1, 0),
(2, 'Altair', 'Web app en react para fundación Altair', '2022-01-07 23:00:00', 1, 1),
(3, 'Pry', 'Web app en react para fundación Pry', '2022-01-08 23:00:00', 1, 0),
(4, 'Pyro', 'Web app en react para fundación Pyro', '2022-01-09 23:00:00', 0, 0),
(5, 'Departamento', 'Trabajo en el departamento', '2022-02-09 23:00:00', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `registra`
--

CREATE TABLE `registra` (
  `num_horas` float NOT NULL,
  `id_actividad` int(11) NOT NULL,
  `id_empleado` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `sub_auth0` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `registra`
--

INSERT INTO `registra` (`num_horas`, `id_actividad`, `id_empleado`, `fecha`, `sub_auth0`, `correo`) VALUES
(8, 1, 1, '2022-05-08 22:00:00', 'auth0|n#\"41_2*3f-kcansad', 'pedro@natgas.com.mx'),
(10, 2, 2, '2022-09-05 22:00:00', 'auth0|n#\"42_2*3f-kcansad', 'emilio@natgas.com.mx'),
(11, 3, 3, '2022-09-06 22:00:00', 'auth0|n#\"43_2*3f-kcansad', 'regina@natgas.com.mx'),
(7, 4, 4, '2022-08-31 22:00:00', 'auth0|n#\"44_2*3f-kcansad', 'andres@natgas.com.mx'),
(2, 5, 5, '2022-09-12 22:00:00', 'auth0|n#\"45_2*3f-kcansad', 'juan@natgas.com.mx'),
(5, 6, 6, '2022-09-13 22:00:00', 'auth0|n#\"46_2*3f-kcansad', 'jose@natgas.com.mx'),
(4, 8, 8, '2022-09-19 22:00:00', 'auth0|n#\"48_2*3f-kcansad', 'ramona@natgas.com.mx'),
(1, 9, 9, '2022-09-20 22:00:00', 'auth0|n#\"49_2*3f-kcansad', 'monse@natgas.com.mx'),
(2, 10, 10, '2022-09-25 22:00:00', 'auth0|n#\"50_2*3f-kcansad', 'gguadalupe@natgas.com.mx'),
(5, 11, 11, '2022-09-26 22:00:00', 'auth0|n#\"50_2*3f-kcansad', 'leo0ramolo@natgas.com.mx'),
(4, 12, 12, '2022-09-27 22:00:00', 'auth0|n#\"51_2*3f-kcansad', 'aalan@natgas.com.mx'),
(2, 13, 13, '2022-10-02 22:00:00', 'auth0|n#\"52_2*3f-kcansad', 'mmonsee1@natgas.com.mx'),
(3, 14, 14, '2022-10-03 22:00:00', 'auth0|n#\"53_2*3f-kcansad', 'felixg@natgas.com.mx'),
(4, 15, 15, '2022-12-04 23:00:00', 'auth0|n#\"54_2*3f-kcansad', 'ddiegoo@natgas.com.mx'),
(1, 16, 16, '2022-10-09 22:00:00', 'auth0|n#\"55_2*3f-kcansad', 'santilb@natgas.com.mx'),
(8, 17, 17, '2022-10-10 22:00:00', 'auth0|n#\"56_2*3f-kcansad', 'Enriquex@natgas.com.mx'),
(1, 18, 18, '2022-10-11 22:00:00', 'auth0|n#\"57_2*3f-kcansad', 'Evlira@natgas.com.mx'),
(2, 19, 19, '2022-10-16 22:00:00', 'auth0|n#\"58_2*3f-kcansad', 'Ale_jandro@natgas.com.mx'),
(5, 20, 20, '2022-10-17 22:00:00', 'auth0|n#\"59_2*3f-kcansad', 'MonicaAPW@natgas.com.mx');

-- --------------------------------------------------------

--
-- Table structure for table `reporte`
--

CREATE TABLE `reporte` (
  `horas_vacaciones` float NOT NULL,
  `horas_trabajadas` float NOT NULL,
  `horas_tiempo_completo` float NOT NULL,
  `horas_tiempo_medio` float NOT NULL,
  `coeficiente_efectividad` float NOT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `fecha_corte` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reporte`
--

INSERT INTO `reporte` (`horas_vacaciones`, `horas_trabajadas`, `horas_tiempo_completo`, `horas_tiempo_medio`, `coeficiente_efectividad`, `fecha`, `fecha_corte`) VALUES
(0, 385, 7, 4, 0.85, '2022-09-13 05:13:53', '2022-09-13 05:13:53');

-- --------------------------------------------------------

--
-- Table structure for table `rol`
--

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `descripcion` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rol`
--

INSERT INTO `rol` (`id_rol`, `descripcion`) VALUES
(1, 'Coordinador'),
(2, 'Lider'),
(3, 'Colaborador');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actividad`
--
ALTER TABLE `actividad`
  ADD PRIMARY KEY (`id_actividad`);

--
-- Indexes for table `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`correo`,`id_empleado`,`sub_auth0`);

--
-- Indexes for table `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`id_proyecto`);

--
-- Indexes for table `registra`
--
ALTER TABLE `registra`
  ADD PRIMARY KEY (`id_empleado`,`correo`,`sub_auth0`,`id_actividad`);

--
-- Indexes for table `reporte`
--
ALTER TABLE `reporte`
  ADD PRIMARY KEY (`fecha`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actividad`
--
ALTER TABLE `actividad`
  MODIFY `id_actividad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `id_proyecto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

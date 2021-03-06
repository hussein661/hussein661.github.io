-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2019 at 09:50 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lend a hand`
--

-- --------------------------------------------------------

--
-- Table structure for table `donation`
--

CREATE TABLE `donation` (
  `id` varchar(36) NOT NULL,
  `reciver_id` varchar(36) NOT NULL,
  `doner_id` varchar(36) NOT NULL,
  `amount` float NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `problems`
--

CREATE TABLE `problems` (
  `id` varchar(36) NOT NULL,
  `title` varchar(15) NOT NULL,
  `description` varchar(300) NOT NULL,
  `amount` float NOT NULL,
  `aquired` int(1) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `problems`
--

INSERT INTO `problems` (`id`, `title`, `description`, `amount`, `aquired`, `user_id`, `created_at`, `updated_at`) VALUES
('25b70ed5-a3a1-495d-8969-bfcdced1d3d3', 'untitled', 'some desc', 5, 1, 'dc25cf72-fee5-445d-a63f-bc605607b5e6', '2019-05-19 06:16:52', '2019-05-19 06:16:52'),
('3b6289e1-5769-464f-9932-8f4c3f1be7b5', 'untitled', 'some desc', 5, 1, 'dc25cf72-fee5-445d-a63f-bc605607b5e6', '2019-05-19 06:16:52', '2019-05-19 06:16:52'),
('5b75fc74-1eb4-4efa-86f8-a57681aa1d41', 'untitled', 'some desc', 5, 1, 'dc25cf72-fee5-445d-a63f-bc605607b5e6', '2019-05-19 06:16:52', '2019-05-19 06:16:52'),
('c2142e2c-d15c-4a0c-ba3e-8457c7ac722b', 'untitled', 'some desc', 5, 1, 'dc25cf72-fee5-445d-a63f-bc605607b5e6', '2019-05-19 06:16:52', '2019-05-19 06:16:52'),
('ddf01158-3bcd-4a2b-a407-83a02d262b80', 'untitled', 'some desc', 5, 1, 'dc25cf72-fee5-445d-a63f-bc605607b5e6', '2019-05-19 06:16:52', '2019-05-19 06:16:52');

-- --------------------------------------------------------

--
-- Table structure for table `problems_images`
--

CREATE TABLE `problems_images` (
  `id` varchar(36) NOT NULL,
  `problem_id` varchar(36) NOT NULL,
  `image` varchar(25) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` varchar(36) NOT NULL,
  `name` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `first_name` varchar(15) NOT NULL,
  `last_name` varchar(15) NOT NULL,
  `email` varchar(36) NOT NULL,
  `password` varchar(60) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `image` varchar(25) NOT NULL,
  `country_id` int(3) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `mobile`, `image`, `country_id`, `created_at`, `updated_at`) VALUES
('3f630a5c-a0e0-4706-b46a-242a394396f3', 'hussein', 'hussein', 'uxmx123@gmail.com', '$2b$10$zpb5McwW5fyYU7VW0MhZb.MXQQi0PYWUEw83IfeyU5JlM/Riu62Y2', '', '', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('4017e22a-f3bf-4763-aa66-fec13bc573f8', 'adam ', 'eltrin', 'adameltien@gotmailc.ckm', '$2b$10$XjFu.h3xxMAKni5./DwbFuAet5nPPfe91vYrZ1zj5KKgOThREKiAO', '70232661', 'image', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('43fdc486-b126-4a62-851b-e67ecb1c7135', 'test', 'test', 'test@test.com', '$2b$10$lUo1sjMRTYwJPdURQgeglenpOUS4HgbjigiQLvTcIdrGR5MX3hGzG', '', '', 0, '2019-05-19 03:41:20', '2019-05-19 03:41:20'),
('4b2b18b0-19ee-464b-9adc-ccfd9fdbbdb4', 'adsadsad', 'dsad', 'hussein.huqssein@montyholding.com', '$2b$10$H.2usdJaixMmvQpO.RZPT.fZcfHC5eBVRiIDwPyT.LauQmM1jOzGW', '70232661', 'image', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('a5868f26-12a9-44dc-b9e1-191b2e1bc662', 'adsadsad', 'dsad', 'admin1@gmail.com', '$2b$10$Q/TfqyWdgTjS/aeIPYAkbO9wZrW2653ZcmMzieTRDlp4Z2eplmTcG', '', '', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('b0153067-bc59-4ee8-adef-3d498915aee2', 'adam ', 'eltrin', 'adamsseltien@gotmailc.ckm', '$2b$10$n1AMC36o0ZIkAYMjVNbYsu6dtDK.bf3ipHCpqgwTzioXhaVpMdyN.', '', '', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('dc25cf72-fee5-445d-a63f-bc605607b5e6', 'hussein', 'hussein', 'hussein@monty.com', '$2b$10$sedYL00RN8sdCfDJxGZ8.OX9hz5oUpIygw2ZnrGx4Yk.AMD2SztWO', '', '', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('e9a46fc2-bbec-45bd-92e3-9c804f5f2aa7', 'hussein', 'hussein', 'h.husn99@gmail.com', '$2b$10$V/wlcpkYonvVO97HDeFzTuTPxYuZj.MxPTazsfQOoFFwrkiR8u6Ym', '70232661', '', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('f157f219-eda9-4df6-adf1-0611be7da432', 'adsadsad', 'dsad', 'hussein.hussein@montyholding.com', '$2b$10$nbFibgQzUKjY1PFKsM5JhO8ZcNS3lilAEa6wACyuVRLDFqyggden.', '', '', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` varchar(36) NOT NULL,
  `role_id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `donation`
--
ALTER TABLE `donation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `problems`
--
ALTER TABLE `problems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `problems_images`
--
ALTER TABLE `problems_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

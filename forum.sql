-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 18, 2021 at 07:37 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `forum`
--

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

CREATE TABLE `answer` (
  `id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `answer` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `answer`
--

INSERT INTO `answer` (`id`, `question_id`, `user_id`, `answer`, `date`) VALUES
(1, 1, 2, 'Adolf Hitler adalah seorang politisi Jerman dan ketua Partai Nazi kelahiran Austria. Ia menjabat sebagai Kanselir Jerman sejak 1933 sampai 1945 dan diktator Jerman Nazi mulai tahun 1934 sampai 1945. Hitler menjadi tokoh utama Jerman Nazi, Perang Dunia II di Eropa, dan Holocaust.', '2021-06-14'),
(4, 3, 2, 'sistem komunisme telah hancur karena tidak mampu beradaptasi dengan perkembangan zaman. Akhirnya negara-negara tersebut mulai melepaskan diri pada pertengahan tahun 1991. Uni Soviet secara resmi dibubarkan pada 25 Desember 1991 ditandai dengan mundurnya presiden Mikhail Gorbachev.', '2021-06-14'),
(5, 2, 3, 'komunis adalah paham yang menekankan kepemilikan bersama atas alat-alat produksi (tanah,tenaga kerja, modal) yang bertujuan untuk tercapainya masyarakat yang makmur, masyarakat komunis tanpa kelas dan semua orang sama.', '2021-06-14'),
(15, 4, 1, 'Genosida atau genosid adalah sebuah pembantaian besar-besaran secara sistematis terhadap satu suku bangsa atau kelompok dengan maksud memusnahkan (membuat punah) bangsa tersebut', '2021-06-14'),
(23, 6, 3, 'Karena invasi Jerman ke Polandia sehingga FIFA memutuskan untuk membatalkan Piala Dunia,meski begitu Adolf Hitler membuat pertandingan yang di klaim sebagai Final Piala Dunia', '2021-06-18'),
(24, 5, 2, 'Pada tahun 1980an, Uni Soviet mengalami krisis politik dan ekonomi. Korupsi merajalela, sementara masyarakat kesulitan membeli bahan-bahan kebutuhan.\r\nUpaya reformasi Glasnost dan Perestroika ini ditujukan untuk memperbaiki kondisi politik dan ekonomi di Uni Sovyet saat itu yang mengalami krisis.\r\nGlasnost (berarti “keterbukaan” dalam bahasa Rusia), adalah kebijakan peningkatan keterbukaan dalam pemerintah di Uni Soviet. Gorbachev menerapkan kebijakan ini untuk mengurangi korupsi di pemerintahan dan di Partai Komunis, serta mengurangi penyalahgunaan kekuasaan oleh Komite Sentral Uni Soviet. Dengan kebijakan ini selama tahun 1980-an terdapat peningkatan kebebasan informasi dan berpendapat.\r\nPerestroika (berarti \"restrukturisasi\") dalam bahasa Rusia, merupakan serangkaian perubahan kebijakan ekonomi Uni Soviet yang dimulai tahun 1986.\r\nUni Soviet adalah negara komunis dengan sistem ekonomi terencana, sehingga pemerintah mengendalikan ekonomi. Namun kebijakan ini menyebabkan kelangkaan barang dan keleusan ekonomi. Perestroika berupaya memulihkan perekonomian dengan memberikan keterbukaan usaha.\r\nNamun pada akhirnya, upaya reformasi ini gagal, dan Uni Sovyet semakin melemah, ditambah lagi dengan runtuhnya pengaruh komunisme di Eropa Timur. Akhirnya, Uni Sovyet bubar pada tahun 1992.', '2021-06-18'),
(25, 1, 2, ' Test<br><br>', '2021-06-19');

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `date` date NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `title`, `date`, `user_id`) VALUES
(1, 'Bagaimana menurut anda tentang Adolf Hitler', '2021-06-01', 1),
(2, 'Apakah itu komunis?', '2021-06-13', 1),
(3, 'Mengapa Komunis runtuh? <br><br>', '2021-06-13', 1),
(4, 'apakah itu Genosida?', '2021-06-13', 1),
(5, 'Apakah yang dimaksud dengan glasnost dan perestroika? <br><br>', '2021-06-13', 1),
(6, 'Mengapa Piala Dunia 1942 tidak diakui FIFA?', '2021-06-13', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(31) NOT NULL,
  `name` varchar(31) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `password`) VALUES
(1, 'irfang@gmail.com', 'Irfan Gusfano', '$2a$08$09HSlyOnlxvTWUmiHmMgG.miAhW3T8TAQOL545.HPDaCXA1m2Fv2O'),
(2, 'gentarj@gmail.com', 'Gentar J', '$2a$08$.18y0yO3pNlTA6r7K0LBfeHIrODKRczqeZ6dEmflyeITzN3Fj2UDm'),
(3, 'wiraputra@gmail.com', 'Wira Putra A', '$2a$08$s5H4YlaAisMSkzsuec5w4.tSl1aaxICakb/GcnFXaTTn9M8rFcRhy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answer`
--
ALTER TABLE `answer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

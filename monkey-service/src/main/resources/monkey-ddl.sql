-- ----------------------------
-- Table structure for user
-- ----------------------------
CREATE TABLE IF NOT EXISTS `user`
(
    `id`          varchar(36) NOT NULL,
    `name`        varchar(10) DEFAULT NULL,
    `nickname`    varchar(30) DEFAULT NULL,
    `username`    varchar(30) NOT NULL,
    `create_time` datetime    DEFAULT NULL,
    `update_time` datetime    DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
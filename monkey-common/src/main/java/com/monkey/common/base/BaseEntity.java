package com.monkey.common.base;

import lombok.Data;

import java.util.Date;

/**
 * Entity基类
 *
 * @author luffy
 * @date 2021/4/11 00:22
 */
@Data
public class BaseEntity {

    private String id;
    private Date createTime;
    private Date updateTime;
}

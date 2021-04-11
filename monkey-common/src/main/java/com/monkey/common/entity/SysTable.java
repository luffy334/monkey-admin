package com.monkey.common.entity;

import com.monkey.common.base.BaseEntity;
import lombok.Data;

/**
 * 系统表
 *
 * @author luffy
 * @date 2021/4/11 00:19
 */
@Data
public class SysTable extends BaseEntity {

    private String mame;
    private String description;
}

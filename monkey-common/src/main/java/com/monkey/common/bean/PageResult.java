package com.monkey.common.bean;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

/**
 * 分页查询返回的数据对象
 *
 * @author luffy
 * @date 2021/4/11 23:30
 */
@Data
@AllArgsConstructor
public class PageResult<T> {

    private long total;
    private List<T> data;
}

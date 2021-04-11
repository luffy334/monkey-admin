package com.monkey.common.bean;

import lombok.Data;

/**
 * 分页参数对象
 *
 * @author luffy
 * @date 2021/4/11 22:39
 */
@Data
public class RequestParam<T> {

    private int currentPage;
    private int pageSize;
    private T param;
}

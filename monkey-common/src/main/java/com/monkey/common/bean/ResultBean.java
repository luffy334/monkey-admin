package com.monkey.common.bean;

import com.monkey.common.enums.ResultCode;
import lombok.Data;

/**
 * 接口交互统一返回的数据对象
 *
 * @author luffy
 * @date 201/4/11 19:27
 */
@Data
public class ResultBean<T> {

    private int code;
    private String msg;
    private T data;

    public ResultBean(ResultCode resultCode, T data)  {
        this.code = resultCode.getCode();
        this.msg = resultCode.getMsg();
        this.data = data;
    }
}

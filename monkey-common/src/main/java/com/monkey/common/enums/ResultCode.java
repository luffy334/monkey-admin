package com.monkey.common.enums;

import lombok.Getter;
import lombok.Setter;

/**
 * TODO
 *
 * @author luffy
 * @date 2021/4/11 19:28
 */
public enum ResultCode {

    /**
     * 请求正常
     */
    SUCCESS(200, "正常");

    @Getter
    @Setter
    private int code;

    @Getter
    @Setter
    private String msg;

    ResultCode(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }
}

package com.monkey.service.controller.config;

import com.monkey.common.bean.PageResult;
import com.monkey.common.bean.RequestParam;
import com.monkey.common.bean.ResultBean;
import com.monkey.common.entity.SysTable;
import com.monkey.common.enums.ResultCode;
import com.monkey.service.service.SysTableService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.ws.soap.Addressing;

/**
 * 系统表接口
 *
 * @author luffy
 * @date 2021/4/11 18:26
 */
@RestController
@RequestMapping("table")
public class SysTableController {

    @Addressing
    private SysTableService sysTableService;

    @GetMapping
    public ResultBean<PageResult<SysTable>> queryAllTable(@ModelAttribute RequestParam<?> requestParam) {
        PageResult<SysTable>  pageResult = sysTableService.queryAllTable(requestParam);
        return new ResultBean<>(ResultCode.SUCCESS, pageResult);
    }
}

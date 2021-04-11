package com.monkey.service.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.monkey.common.bean.PageResult;
import com.monkey.common.bean.RequestParam;
import com.monkey.common.entity.SysTable;
import com.monkey.common.mapper.SysTableMapper;
import com.monkey.service.service.SysTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 系统表业务处理
 *
 * @author luffy
 * @date 2021/4/11 19:48
 */
@Service
public class SysTableServiceImpl implements SysTableService {

    @Autowired
    private SysTableMapper sysTableMapper;

    @Override
    public PageResult<SysTable> queryAllTable(RequestParam<?> requestParam) {
        PageHelper.startPage(requestParam.getCurrentPage(), requestParam.getPageSize());
        List<SysTable> sysTables = sysTableMapper.queryAllTable(requestParam);
        PageInfo<SysTable> pageInfo = new PageInfo<>(sysTables);
        return new PageResult<>(pageInfo.getTotal(), sysTables);
    }
}

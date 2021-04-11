package com.monkey.service.service;

import com.monkey.common.bean.PageResult;
import com.monkey.common.bean.RequestParam;
import com.monkey.common.entity.SysTable;

/**
 * 系统表业务处理
 *
 * @author luffy
 * @date 2021/4/11 19:48
 */
public interface SysTableService {

    /**
     * 查询所有系统表
     *
     * @param requestParam
     * @return java.util.List<com.monkey.common.entity.SysTable>
     * @author luffy
     * @date 2021/4/11 19:51
     **/
    PageResult<SysTable> queryAllTable(RequestParam<?> requestParam);
}

package com.monkey.common.mapper;

import com.monkey.common.bean.RequestParam;
import com.monkey.common.entity.SysTable;

import java.util.List;

/**
 * 系统表Dao
 *
 * @author luffy
 * @date 2021/4/11 20:08
 */
public interface SysTableMapper {

    /**
     * 查询所有系统表
     *
     * @param requestParam
     * @return java.util.List<com.monkey.common.entity.SysTable>
     * @author luffy
     * @date 2021/4/11 20:10
     **/
    List<SysTable> queryAllTable(RequestParam<?> requestParam);
}

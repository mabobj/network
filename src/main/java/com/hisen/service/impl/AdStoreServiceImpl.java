package com.hisen.service.impl;

import com.hisen.frame.dao.JdbcDao;
import com.hisen.frame.dao.JdbcDaoMySql;
import com.hisen.service.AdStoreService;
import org.springframework.stereotype.Service;

@Service("adStoreServiceImpl")
public class AdStoreServiceImpl implements AdStoreService {
    private JdbcDao jdbcDao;

    @Override
    public String getAdInfoByJson(String adId) {
        jdbcDao.queryForList("SELECT * FROM class_info");
        return "okok";
    }
}

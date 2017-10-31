package com.hisen.frame.util;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.UUID;

public class SystemUtil {


    public static int getRandom(int start, int end) {
        if (start > end || start < 0 || end < 0) {
            return -1;
        }
        return (int) (Math.random() * (end - start + 1)) + start;
    }

    public static String randomUUID() {
        return UUID.randomUUID().toString().replace("-", "");
    }

    /**
     * yyyy-MM-dd HH:ss:mm
     *
     * @return
     */
    public static SimpleDateFormat sdfDateTime() {
        return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    }

    public static SimpleDateFormat sdfDate() {
        return new SimpleDateFormat("yyyy-MM-dd");
    }

    public static String getIpAddr(HttpServletRequest request) {
        String ip = request.getHeader("x-forwarded-for");
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        return ip.replace(" ", "");
    }

    public static void main(String[] args) {

        for (int i = 0; i < 6; i++) {
            System.out.println(SystemUtil.getRandom(100000, 999999));
        }
    }
}

package com.hisen.entity;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.hisen.frame.util.FileTools;
import com.hisen.frame.util.PropertiesTools;
import com.hisen.frame.util.SystemUtil;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AdStore {

    private AdStore() {

        Thread t = new Thread(new Runnable() {
            @Override
            public void run() {
                while (true) {
                    initAdInfoStr();
                    try {
                        Thread.sleep(60 * 1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        });
        t.start();

    }

    private static AdStore adStore = null;

    //静态工厂方法
    public static AdStore getInstance() {
        if (adStore == null) {
            synchronized (AdStore.class) {
                adStore = new AdStore();
            }
        }
        return adStore;
    }

    private JSONObject adInfoJobj = null;

    public String initAdInfoStr() {
        String filePath = PropertiesTools.class.getClassLoader().getResource("").getPath()
                + "adinfo.json";

        try {
            adInfoJobj = JSONObject.parseObject(FileTools.loadFile(filePath));
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "";
    }

    public JSONObject getAdInfoByjObj(String adGroup) {
        JSONArray ja = adInfoJobj.getJSONObject(adGroup).getJSONArray("adList");
        int i = SystemUtil.getRandom(0, ja.size() - 1);
        return ja.getJSONObject(i);
    }


    public static void main(String[] args) {
        Map jObj = new HashMap();


        Map adInfo = new HashMap();

        List<Map> adList = new ArrayList();
        //ad001
        Map tmap = new HashMap();
        tmap.put("img", "http://j.sjzdomeili.com:8080/57jc/640-200/swrq5.gif");
        tmap.put("url", "http://oekh0.yinduhong.cn:8301/kankan.zip");
        adList.add(tmap);

        tmap = new HashMap();
        tmap.put("img", "http://j.sjzdomeili.com:8080/57jc/640-200/mmdpy11.gif");
        tmap.put("url", "http://oekh0.yinduhong.cn:8301/kankan.zip");
        adList.add(tmap);

        tmap = new HashMap();
        tmap.put("img", "http://j.sjzdomeili.com:8080/57jc/640-200/swrq1.gif");
        tmap.put("url", "http://oekh0.yinduhong.cn:8301/kankan.zip");
        adList.add(tmap);

        tmap = new HashMap();
        tmap.put("img", "http://j.sjzdomeili.com:8080/57jc/640-200/jjdpy.gif");
        tmap.put("url", "http://oekh0.yinduhong.cn:8301/kankan.zip");
        adList.add(tmap);

        //ad002
        tmap = new HashMap();
        tmap.put("img", "http://j.sjzdomeili.com:8080/57jc/640-200/swrq5.gif");
        tmap.put("url", "http://123.zc3zf.net:8088/?c=4003");
        adList.add(tmap);

        tmap = new HashMap();
        tmap.put("img", "http://j.sjzdomeili.com:8080/57jc/640-200/mmdpy11.gif");
        tmap.put("url", "http://123.zc3zf.net:8088/?c=4003");
        adList.add(tmap);

        tmap = new HashMap();
        tmap.put("img", "http://j.sjzdomeili.com:8080/57jc/640-200/swrq1.gif");
        tmap.put("url", "http://123.zc3zf.net:8088/?c=4003");
        adList.add(tmap);

        tmap = new HashMap();
        tmap.put("img", "http://j.sjzdomeili.com:8080/57jc/640-200/jjdpy.gif");
        tmap.put("url", "http://123.zc3zf.net:8088/?c=4003");
        adList.add(tmap);

        adInfo.put("adList", adList);

        jObj.put("a1001", adInfo);


        adInfo = new HashMap();

        adList = new ArrayList();
        //ad001
        tmap = new HashMap();
        tmap.put("img", "http://j.sjzdomeili.com:8080/57jc/640-200/swrq5.gif");
        tmap.put("url", "http://jv7zf.baohaocat.cn:9000/kankan.html");
        adList.add(tmap);

        tmap = new HashMap();
        tmap.put("img", "http://j.sjzdomeili.com:8080/57jc/640-200/mmdpy11.gif");
        tmap.put("url", "http://jv7zf.baohaocat.cn:9000/kankan.html");
        adList.add(tmap);

        tmap = new HashMap();
        tmap.put("img", "http://j.sjzdomeili.com:8080/57jc/640-200/swrq1.gif");
        tmap.put("url", "http://jv7zf.baohaocat.cn:9000/kankan.html");
        adList.add(tmap);

        tmap = new HashMap();
        tmap.put("img", "http://j.sjzdomeili.com:8080/57jc/640-200/jjdpy.gif");
        tmap.put("url", "http://jv7zf.baohaocat.cn:9000/kankan.html");
        adList.add(tmap);

        //ad002
        tmap = new HashMap();
        tmap.put("img", "http://j.sjzdomeili.com:8080/57jc/640-200/swrq5.gif");
        tmap.put("url", "http://123.zc3zf.net:8088/?c=4010");
        adList.add(tmap);

        tmap = new HashMap();
        tmap.put("img", "http://j.sjzdomeili.com:8080/57jc/640-200/mmdpy11.gif");
        tmap.put("url", "http://123.zc3zf.net:8088/?c=4010");
        adList.add(tmap);

        tmap = new HashMap();
        tmap.put("img", "http://j.sjzdomeili.com:8080/57jc/640-200/swrq1.gif");
        tmap.put("url", "http://123.zc3zf.net:8088/?c=4010");
        adList.add(tmap);

        tmap = new HashMap();
        tmap.put("img", "http://j.sjzdomeili.com:8080/57jc/640-200/jjdpy.gif");
        tmap.put("url", "http://123.zc3zf.net:8088/?c=4010");
        adList.add(tmap);

        adInfo.put("adList", adList);

        jObj.put("i1001", adInfo);


        System.out.println(JSONObject.toJSONString(jObj));

    }

}

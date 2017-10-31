package com.hisen.frame.util;


import java.io.*;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

/**
 * Created with IntelliJ IDEA.
 * Base: lovesuper_ao
 * Date: 13-10-1
 * Time: 上午10:34
 * To change this template use File | Settings | File Templates.
 */
public class PropertiesTools {

    public static Properties initProperties() {


        //InputStream in = SystemTools.class.getClassLoader().getResourceAsStream("Config.properties");


        String filePath = PropertiesTools.class.getClassLoader().getResource("").getPath() + "Config.properties";

/*
        String[] paths = PropertiesTools.class.getClassLoader().getResource("/").getPath().split(String.valueOf(File.separatorChar));
        String filePath = String.valueOf(File.separatorChar);
        for (int i = 1; i < paths.length - 2; i++) {
            filePath = filePath + paths[i] + File.separatorChar;
        }
        filePath = filePath + "WEB-INF" + File.separator + "classes" + File.separatorChar + "Config.properties";
*/

        System.out.println("PropertiesTools === " + filePath);


        InputStream in = null;
        try {
            in = new BufferedInputStream(new FileInputStream(filePath));
        } catch (FileNotFoundException e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        }


        Properties p = new Properties();
        try {
            p.load(in);
        } catch (IOException e1) {
            e1.printStackTrace();
        }

        return p;
    }

    private static Properties p = initProperties();

    public static String JEDIS_IP = p.getProperty("JEDIS_IP");

    public static Map CHANNLE_USER_MAP = new HashMap();

    public static int T_CPS = 0;
    public static int T_CPA = 0;

    public static String[] AD_URL;

    static {
        Thread t = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("=== 重新加载 ===");
                PropertiesTools.AD_URL = p.getProperty("AD_URL").split(";");
                try {
                    Thread.sleep(60 * 1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });
        t.start();
    }

    public static void main(String[] args) throws UnknownHostException {
        // System.out.println(SystemTools.class.getClassLoader().getResourceAsStream("Config.properties"));

    }
}

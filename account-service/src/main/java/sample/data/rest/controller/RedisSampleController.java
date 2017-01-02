package sample.data.rest.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import sample.data.rest.service.SampleRedisService;

/**
 * Created by zhongwei on 02/01/2017.
 */
@RestController
@RequestMapping("/redis")
public class RedisSampleController {

    @Autowired
    private SampleRedisService sampleRedisService;

    @RequestMapping("home")
    String home() {
        String returnString = "";
        try {
            returnString = sampleRedisService.redisSample();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return returnString;
    }

}
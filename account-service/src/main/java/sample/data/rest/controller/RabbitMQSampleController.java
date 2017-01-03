package sample.data.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sample.data.rest.service.RabbitMQSenderService;

/**
 * Created by zhongwei on 03/01/2017.
 */
@RestController
@RequestMapping("/rabbitmq")
public class RabbitMQSampleController {

    @Autowired
    private RabbitMQSenderService rabbitMQSenderService;

    @RequestMapping("home")
    String home() {
        rabbitMQSenderService.send();
        return "Message has sent!";
    }

}

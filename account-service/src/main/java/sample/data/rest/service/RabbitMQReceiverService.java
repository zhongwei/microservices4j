package sample.data.rest.service;

import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

/**
 * Created by zhongwei on 03/01/2017.
 */
@Component
@RabbitListener(queues = "hello")
public class RabbitMQReceiverService {

    @RabbitHandler
    public void process(String hello) {
        System.out.println("Receiver : " + hello);
    }

}

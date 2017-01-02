package sample.data.rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;

/**
 * Created by zhongwei on 02/01/2017.
 */
@Component
public class SampleRedisService {
    @Autowired
    private StringRedisTemplate template;

    public String redisSample() throws Exception {
        ValueOperations<String, String> ops = this.template.opsForValue();
        String key = "spring.boot.redis.test";
        if (!this.template.hasKey(key)) {
            ops.set(key, "Redis is OK!");
        }
        System.out.println("Found key " + key + ", value=" + ops.get(key));
        return ops.get(key);
    }
}

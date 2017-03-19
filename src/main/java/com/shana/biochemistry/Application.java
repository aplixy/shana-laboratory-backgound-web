package com.shana.biochemistry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.shana.biochemistry"})
public class Application {

    /*@Bean
    @Primary
    @ConfigurationProperties("spring.datasource")
    public DataSource primaryDataSource() {
        return DataSourceBuilder.create().build();
    }*/

    /*@PostConstruct
    private void handlePid() throws IOException {
        File file = new File("application.pid");
        new ApplicationPid().write(file);
        file.deleteOnExit();
    }*/

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

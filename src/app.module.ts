import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormsModule } from './forms/forms.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [FormsModule,
    UsersModule,],
  controllers: [
    UsersController, AppController],
  providers: [AppService],
})
export class AppModule { }

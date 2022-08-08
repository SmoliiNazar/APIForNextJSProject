import { Controller, Body, Post, Param, Delete, Patch, Get, HttpCode } from '@nestjs/common';
import { FindTopPageDTO } from './dto/find-top-page.dto';
import { TopPageModel } from './top-page.model';

@Controller('top-page')
export class TopPageController {
    @Post('create')
    async create(@Body() dto: Omit<TopPageModel, '_id'>) {

    }

    @Get(':id')
    async name(@Param('id') id: string) {
        
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {

    }

    @Patch(':id')
    async Patch(@Param('id') id: string, @Body() dto: TopPageModel) {

    }

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindTopPageDTO) {

    }
}

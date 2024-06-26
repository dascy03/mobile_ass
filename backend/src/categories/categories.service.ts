import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument} from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name)
    private readonly model: Model<CategoryDocument>,
  ) {}
  async create(_id:string, createCategoryDto: CreateCategoryDto): Promise<Category>{
    return new this.model({
      ...createCategoryDto,
      userRef: _id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).save();
  }

  async findAll(userRef:any) {
    return await this.model.find({userRef: userRef.id});
  }

  async findOne(id: string): Promise<CategoryDocument>{
    return await this.model.findById(id);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryDocument>{
    return await this.model.findOneAndUpdate({_id: id}, updateCategoryDto, {new: true}).exec()
  }


  async remove(id: string) {
    return await this.model.findOneAndUpdate({_id: id}, {isDeleted: true}, {new: true}).exec();
  }
}

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

  findAll(userRef:any) {
    return this.model.find({userRef: userRef._id});
  }

  findOne(id: string): Promise<CategoryDocument>{
    return this.model.findById(id);
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.model.findOneAndUpdate({_id: id}, updateCategoryDto, {new: true})
  }


  remove(id: string):any{
    return this.model.deleteOne({_id: id});
  }
}

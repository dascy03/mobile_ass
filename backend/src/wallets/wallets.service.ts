import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet, WalletDocument } from './entities/wallet.entity';
@Injectable()
export class WalletsService {
  constructor(
    @InjectModel(Wallet.name)
    private readonly model: Model<WalletDocument>,
  ) {
  }
  async create(_id: string,createWalletDto: CreateWalletDto, ): Promise<Wallet>{
    return new this.model({
      ...createWalletDto,
      fixedBalance: createWalletDto.Balance,
      userRef: _id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).save();
  }

  findAll(userRef:any): Promise<WalletDocument[]>{
    return this.model.find({userRef: userRef});
  }

  async update(id: string, updateWalletDto: UpdateWalletDto) {
    //update the wallet with new value,if not value is provided, keep the old value
    return this.model.findOneAndUpdate({_id: id}, updateWalletDto, {new: true}).exec()
  }

  remove(id: string):Promise<WalletDocument> {
    return this.model.findOneAndUpdate({_id: id}, {isDeleted: true}, {new: true});
  }
}

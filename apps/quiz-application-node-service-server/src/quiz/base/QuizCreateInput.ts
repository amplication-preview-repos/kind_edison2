/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { ResultCreateNestedManyWithoutQuizzesInput } from "./ResultCreateNestedManyWithoutQuizzesInput";
import { EnumQuizStatus } from "./EnumQuizStatus";

@InputType()
class QuizCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endTime?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ResultCreateNestedManyWithoutQuizzesInput,
  })
  @ValidateNested()
  @Type(() => ResultCreateNestedManyWithoutQuizzesInput)
  @IsOptional()
  @Field(() => ResultCreateNestedManyWithoutQuizzesInput, {
    nullable: true,
  })
  results?: ResultCreateNestedManyWithoutQuizzesInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startTime?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumQuizStatus,
  })
  @IsEnum(EnumQuizStatus)
  @IsOptional()
  @Field(() => EnumQuizStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { QuizCreateInput as QuizCreateInput };

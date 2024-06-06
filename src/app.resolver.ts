import { Query, Resolver } from "@nestjs/graphql";



@Resolver((of: void)=> String)
export class AppResolver{

     
    @Query(returns => String)
    index():string{
        return "NestJs Graphql Server";
    }
}
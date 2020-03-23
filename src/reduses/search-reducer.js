const SEARCH = "SEARCH";
const serchUserAtionCreator = (prop) => ({type:SEARCH,param:prop})
const initState = () => ({
users:[
  {id:111111,firstName:"Dima",LastName:"Гоги",age:"22",datacreate:"01.04.2018",frends:["2335543","2345522","2345544"]}
]
})
const SearchUserReducer = (state = initState(),action)=>{
  switch (action.type) {
    case SEARCH:
      
      break;
  
    default:
     return state;
  }

}
export default SearchUserReducer;

export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //token: 'BQBz97AliT7yMlGj-pHpwxk1BBO-w_DdOESc-bxL5ruK7radqSjMilne6m21tG15VP-t5hon3fLa_tnp9JDnke42SYOTI5LoyaNC6pA2auadBB8aqAWCzd_3xRhViPp9lf7bH6F0Ll96TPnHH--oaPiQYb1LyE7xoCL3x-054uH6Rqqd',
    
};

const reducer = (state, action) =>{
console.log(action);

   switch(action.type){
       case 'SET_USER':
           return{
               ...state,
               user: action.user,
           };
           case 'SET_TOKEN':
               return{
                   ...state,
                   token: action.token
               };
               case 'SET_PLAYLISTS':
                return{
                    ...state,
                    playlists: action.playlists
                };
                case 'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly: action.discover_weekly,
                };

           default:
               return state;
   }
};

export default reducer;
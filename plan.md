### Cars App with useReducer
- create Json file
- states:
 - [cars]
 - selectedYear
   - type: number
 - filteredYears: [number]  
 - actions:
   - deleteCar
   - setSelectedYeat

  ---
  // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>

  ---
  РЕШЕНИЕ ОШИБКИ - TS2307: Cannot find module './Paginator.module.css' or its corresponding type declarations.
- вот как я ее победил спустя пару часов) 
Нужно добавить файл - declaration.d.ts - в папку src в любое место, я добавил в папку utils – которая у нас уже была и в этот файл добавить такой текст - declare module "*.module.css";
И все)
Более подробно есть на английском стаковерфлоу с таким вопросом – «Can't import CSS/SCSS modules. TypeScript says "Cannot Find Module"»

---

compose<React.Component<PropsType>>
compose<PropsType> тоже работает
  

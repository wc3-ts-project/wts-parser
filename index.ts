let ceresInfo: () => void

let currentMapPath: string

let TRIGSTR: string[] = compiletime(() => {

  ceresInfo = () => {
    printTable(ceres.layout, 'ceresLayout')
    print()
    printTable(ceres.runConfig, 'ceresRunConfig')
    print()
    printTable(ceres.getScriptArgs() as any, 'ceresScriptArgs')
  }

  //@ts-ignore
  currentMapPath = currentMap.path

  const path = './' + currentMapPath + 'war3map.wts'
  let isAdd = false
  TRIGSTR = []
  for (const [line] of io.lines(path)) {
    if (isAdd) {
      TRIGSTR.push(line)
    }
    isAdd = line == '{'
  }
  return TRIGSTR
})

let MAP_NAME: string = compiletime(() => {
  MAP_NAME = TRIGSTR[0]
  return MAP_NAME
})
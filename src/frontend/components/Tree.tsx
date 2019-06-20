/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import { IModelApp, IModelConnection } from "@bentley/imodeljs-frontend";
import { Tree, TreeNodeItem } from "@bentley/ui-components";
import {
  IPresentationTreeDataProvider,
  PresentationTreeDataProvider,
  treeWithUnifiedSelection,
} from "@bentley/presentation-components";
import { NodePathElement } from "@bentley/presentation-common";

// create a HOC tree component that supports unified selection
// tslint:disable-next-line:variable-name
const SimpleTree = treeWithUnifiedSelection(Tree);

/** React properties for the tree component, that accepts an iModel connection with ruleset id */
export interface IModelConnectionProps {
  /** iModel whose contents should be displayed in the tree */
  imodel: IModelConnection;
  /** ID of the presentation rule set to use for creating the hierarchy in the tree */
  rulesetId: string;
  onNodesSelected?: (nodes: TreeNodeItem[], replace: boolean) => boolean;
}

/** React properties for the tree component, that accepts a data provider */
export interface DataProviderProps {
  /** Custom tree data provider. */
  nodes?: NodePathElement[];
  dataProvider: IPresentationTreeDataProvider;
  onNodesSelected?: (nodes: TreeNodeItem[], replace: boolean) => boolean;
}

/** React properties for the tree component */
export type Props = IModelConnectionProps | DataProviderProps;

export class FilteredTreeComponent extends React.PureComponent<Props> {
  private getDataProvider(props: Props) {
    if ((props as any).dataProvider) {
      const providerProps = props as DataProviderProps;
      return providerProps.dataProvider;
    } else {
      const imodelProps = props as IModelConnectionProps;
      console.log(imodelProps + " These are the iModel Props");
      console.log(imodelProps.rulesetId + " this is the iModel Props ruleset ID for simple Tree Component");
      const provider: PresentationTreeDataProvider = new PresentationTreeDataProvider(imodelProps.imodel, imodelProps.rulesetId);
      return provider;
    }
  }

  public render() {
        return (
          <>
            <h3 data-testid="tree-component-header">{IModelApp.i18n.translate("SimpleViewer:components.tree")}</h3>
            <div style={{ flex: "1" }}>
            <SimpleTree dataProvider={this.getDataProvider(this.props)} onNodesSelected={this.props.onNodesSelected}/>
            </div>
          </>
        );
      }
}

/** Tree component for the viewer app */
export default class SimpleTreeComponent extends React.PureComponent<Props> {

  private getDataProvider(props: Props) {
    if ((props as any).dataProvider) {
      const providerProps = props as DataProviderProps;
      console.log(providerProps.dataProvider.getFilteredNodePaths("document") + " This is the getfilterednodePaths");
      return providerProps.dataProvider;
    } else {
      const imodelProps = props as IModelConnectionProps;
      console.log(imodelProps + " These are the iModel Props");
      console.log(imodelProps.rulesetId + " this is the iModel Props ruleset ID for simple Tree Component");
      const provider: PresentationTreeDataProvider = new PresentationTreeDataProvider(imodelProps.imodel, imodelProps.rulesetId);
      this.getNodePaths(provider);
      // console.log(provider.getNodes());
      return provider;
    }
  }

  private async getNodePaths(provider: PresentationTreeDataProvider){
    const paths = await provider.getFilteredNodePaths("");
    let rootNode = paths[0];
    rootNode.isMarked;
    for(let i = 0; i < rootNode.children.length; i++) {
      console.log(i + "index: " + rootNode.children[i].node.label);
      rootNode.children[i].isMarked = true;
      if(!rootNode.children[i].node.label.includes("Document")) {
        console.log(rootNode.children[i].node.label);
        rootNode.children[i].isMarked = false;
      }
    }
    let positionOfDocument: number = -1;
    console.log("looking for document model")
    for(let i = 0; i < rootNode.children.length; i++) {
      if(rootNode.children[i].isMarked) {
        console.log("documentModelFound");
        positionOfDocument = i;
        break;
      }
    }
    if(positionOfDocument !== -1) {
      console.log("Removing child nodes");
      const document = rootNode.children[positionOfDocument];
      for(let i = 0; i < rootNode.children.length; i++) {
        rootNode.children.pop();
      }

      rootNode.children.push(document);
    }
    for(let i = 0; i < rootNode.children.length; i++){
      console.log("CHILD NODE " + rootNode.children[i]);
    }
   // const k = await provider.getFilteredNodePaths("Document");
  }

  // ZD_TODO
  // private async promiseTesting() {
  //   let myNodes: DelayLoadedTreeNodeItem[] = await this.getDataProvider(this.props).getNodes();
  //   for (let node of myNodes) {
  //     node.autoExpand = true;
  //   }
  //   console.log("myNodes");
  //   console.log(myNodes);
  //   console.log("myNodes.length");
  //   console.log(myNodes.length);
  //   return myNodes;
  // }

  public render() {

//      let rootNode: DelayLoadedTreeNodeItem;
//     this.promiseTesting().then(function (v) {
//       rootNode = v[0];
//       console.log("rootNode");
//       console.log(rootNode);
//     });
// // ZD_TODO

    return (
      <>
        <h3 data-testid="tree-component-header">{IModelApp.i18n.translate("SimpleViewer:components.tree")}</h3>
        <div style={{ flex: "1" }}>
        <SimpleTree dataProvider={this.getDataProvider(this.props)} onNodesSelected={this.props.onNodesSelected}/>
        </div>
      </>
    );
  }
}
